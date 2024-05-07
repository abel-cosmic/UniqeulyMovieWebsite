import {Signin} from "@/components/forms/signin/SignIn";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ParticlesEffect from "@/layouts/backgroundAnimations/particlesEffect";
import Image from "next/image";
const page = () => {
  return (
    <>
      <ParticlesEffect />
      <div className="flex flex-row h-full z-50">
        <div className="relative flex flex-col justify-center w-full drop-shadow-xl">
          <Card className="w-fit bg-white m-auto border-none rounded-none">
            <CardHeader className="bg-primary flex flex-col items-center justify-center">
              <Image
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAljIJJRFhG7zYppzhEfI7FSBJ8ZZhVSISIkXP0vMQw&s"
                }
                alt={"Logo"}
                width={100}
                height={100}
              />
            </CardHeader>
            <CardContent className="p-0 px-16 max-md:px-8 py-10 border-none flex flex-col justify-center items-center gap-6">
              <p className="text-4xl font-medium max-md:text-3xl text-center text-slate-800">
                Welcome Back!
              </p>
              <Signin />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default page;
