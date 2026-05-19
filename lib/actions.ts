'use server';
import { ContactSchema, ReservationSchema, RoomSchema } from '@/lib/zod';
import { prisma } from './prisma';
import { redirect } from 'next/navigation';
import { del } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';
import { differenceInCalendarDays } from 'date-fns';

export const ContactMessage = async (prevState: unknown, formData: FormData) => {
  const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });
    return { message: 'Message sent successfully, thanks you!' };
  } catch (error) {
    console.log(error);
  }
};

export const SaveRoom = async (image: string, prevState: unknown, formData: FormData) => {
  if (!image) return { message: 'Image is required!' };

  const rawData = {
    name: formData.get('name'),
    description: formData.get('description'),
    capacity: formData.get('capacity'),
    price: formData.get('price'),
    amenities: formData.getAll('amenities'),
  };

  const validatedFields = RoomSchema.safeParse(rawData);
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, description, capacity, price, amenities } = validatedFields.data;
  try {
    await prisma.room.create({
      data: {
        name,
        description,
        image,
        capacity,
        price,
        RoomAmenities: {
          createMany: {
            data: amenities.map((item) => ({
              amenitiesId: item,
            })),
          },
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
  redirect('/admin/room');
};

export const DeleteRoom = async (id: string, image: string) => {
  try {
    await del(image);
    await prisma.room.delete({
      where: {id},
    })
  } catch (error) {
    console.error(error);
  }
  revalidatePath('/admin/room');
}

export const UpdateRoom = async (image: string, roomId: string, prevState: unknown, formData: FormData) => {
  if (!image) return { message: 'Image is required!' };

  const rawData = {
    name: formData.get('name'),
    description: formData.get('description'),
    capacity: formData.get('capacity'),
    price: formData.get('price'),
    amenities: formData.getAll('amenities'),
  };

  const validatedFields = RoomSchema.safeParse(rawData);
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, description, capacity, price, amenities } = validatedFields.data;
  try {
    await prisma.$transaction([
      prisma.room.update({
        where: {id: roomId},
        data:{
          name,
          description,
          image,
          capacity,
          price,
          RoomAmenities: {
            deleteMany: {

            }
          }
        }
      }),
      prisma.roomAmenities.createMany({
        data: amenities.map((item) => ({
          roomId,
          amenitiesId: item,
        }))
      })
    ])
  } catch (error) {
    console.error(error);
  }
  revalidatePath('/admin/room');
  redirect('/admin/room');
};

export const createReservation = async (roomId: string, price: number, startDate: Date, endDate: Date, prevState: unknown, formData: FormData) => {
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    redirect(`/signin?redirect_url=room/${roomId}`);
  }

  const rawData = {
    name: formData.get('name'),
    phone: formData.get('phone'),
  };

  const validatedFields = ReservationSchema.safeParse(rawData);
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, phone } = validatedFields.data;
  const night = differenceInCalendarDays(endDate, startDate);
  if (night <= 0) {
    return {
      message: "Date must be at least 1 night" 
    }
  }

  const tolalPrice = night * price;

  let reservationId;

  try {
    await prisma.$transaction(async (tx) => {
      await tx.user.update({
        data: {
          name,
          phone,
        },
        where: {
          id: session.user.id,
        }
      });
      const reservation = await tx.reservation.create({
        data: {
          startDate,
          endDate,
          price: tolalPrice,
          roomId: roomId,
          userId: session.user.id as string,
          Payment: {
            create: {
              amount: tolalPrice,
            }
          }
        },
      });
      reservationId = reservation.id;
    })
  } catch (error) {
    console.error(error);
  }
  redirect(`/checkout/${reservationId}`);
}