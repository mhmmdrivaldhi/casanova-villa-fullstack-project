import Card from "../home/Card";

const Main = () => {
    return (
        <div className="max-w-screen-xl py-6 pb-20 px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid gap-7 md:grid-cols-3">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Main;