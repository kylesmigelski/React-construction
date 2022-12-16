import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
    IconButton,
    Input,
    Textarea,
} from "@material-tailwind/react";
import {UsersIcon} from "@heroicons/react/24/solid";
import {PageTitle, Footer} from "@/widgets/layout";
import {FeatureCard} from "@/widgets/cards";
import {featuresData, contactData} from "@/data";

export function Home() {
    return (
        <>
            <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
                <div
                    className="absolute top-0 h-full w-full bg-[url('https://cammconstructioninc.com/wp-content/uploads/2018/12/building-construction-sunset.jpg')] bg-cover bg-center"/>
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center"/>
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-6 font-black"
                            >
                                Build something today.
                            </Typography>
                            <Typography variant="lead" color="white" className="opacity-80">
                                We are a construction company.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {featuresData.map(({color, title, icon, description}) => (
                            <FeatureCard
                                key={title}
                                color={color}
                                title={title}
                                icon={React.createElement(icon, {
                                    className: "w-5 h-5 text-white",
                                })}
                                description={description}
                            />
                        ))}
                    </div>
                    <div className="mt-32 flex flex-wrap items-center">
                        <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                            <div
                                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                                <UsersIcon className="h-6 w-6 text-blue-gray-900"/>
                            </div>
                            <Typography
                                variant="h3"
                                className="mb-3 font-bold"
                                color="blue-gray"
                            >
                                Customer Reviews
                            </Typography>
                            <Typography className="mb-8 font-normal text-blue-gray-500">
                                [Company] has offered a wide array of construction services to
                                Oakland county for over 20 years. We are state licensed general contractors that specialize
                                in residential remodeling and construction. We employ skilled craftsmen in all trades in
                                order to deliver on Our mission, to provide our customers with the most responsive,
                                professional and innovative solutions available. Our experienced team is ready to help
                                you with your next project.
                            </Typography>
                            <Button variant="outlined">Google Reviews</Button>
                        </div>
                        <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                            <Card className="shadow-lg shadow-gray-500/10">
                                <CardHeader className="relative h-56">
                                    <img
                                        alt="Card Image"
                                        src="https://www.familyhandyman.com/wp-content/uploads/2022/10/GettyImages-1391067760.jpg"
                                        className="h-full w-full"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography
                                        variant="h5"
                                        color="blue-gray"
                                        className="mb-3 font-bold"
                                    >
                                        Top Notch Woodworking
                                    </Typography>
                                    <Typography className="font-normal text-blue-gray-500">
                                        Our team of skilled craftsmen can help you with your next wordworking project.
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative bg-blue-gray-50/50 py-24 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                     src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                     src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                     src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                     src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                     src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                     src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative bg-blue-gray-50/50 py-24 px-4">
                <div className="container mx-auto">
                    <PageTitle heading="Build something">
                        Put the potentially record low maximum sea ice extent tihs year down
                        to low ice. According to the National Oceanic and Atmospheric
                        Administration, Ted, Scambos.
                    </PageTitle>
                    <div
                        className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
                        {contactData.map(({title, icon, description}) => (
                            <Card
                                key={title}
                                color="transparent"
                                shadow={false}
                                className="text-center text-blue-gray-900"
                            >
                                <div
                                    className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                                    {React.createElement(icon, {
                                        className: "w-5 h-5",
                                    })}
                                </div>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {title}
                                </Typography>
                                <Typography className="font-normal text-blue-gray-500">
                                    {description}
                                </Typography>
                            </Card>
                        ))}
                    </div>
                    <PageTitle heading="Want to work with us?">
                        Complete this form and we will get back to you in 24 hours.
                    </PageTitle>
                    <form className="mx-auto mt-12 max-w-3xl text-center">
                        <div className="mb-8 flex gap-8">
                            <Input variant="standard" size="lg" label="Full Name"/>
                            <Input variant="standard" size="lg" label="Email Address"/>
                        </div>
                        <Textarea variant="standard" size="lg" label="Message" rows={8}/>
                        <Button variant="gradient" size="lg" className="mt-8">
                            Send Message
                        </Button>
                    </form>
                </div>
            </section>
            <div className="bg-blue-gray-50/50">
                <Footer/>
            </div>
        </>
    );
}

export default Home;
