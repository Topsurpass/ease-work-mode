import {
    Card,
    CardContent,
    CardDescription,
    //CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import useGetJobSeekerById from '@/api/job-seekers/use-get-jobSeekerId';
import { formatDate } from '@/utils/helpers';
import { Link } from 'react-router-dom';

export default function LeftProfileSection() {
    const { data, isLoading } = useGetJobSeekerById();

    return (
        <div className="col-span-2 md:col-span-1 space-y-8 ">
            <Card className="mx-auto shadow-lg">
                <CardHeader className="pb-4 border-b">
                    <CardTitle>About Me</CardTitle>
                    <CardDescription className="text-gray-700">
                        Get to know me
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700">
                    {!isLoading && <p className="py-2">{`${data?.bio}`}</p>}
                </CardContent>
            </Card>
            <Card className="mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle>Skills</CardTitle>
                    <CardDescription className="text-gray-700 pb-4 border-b">
                        Below are my areas of skills and expertise.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700 flex gap-3 flex-wrap">
                    {!isLoading
                        ? data?.skills?.map((skill: any, idx: number) => (
                              <div
                                  key={idx}
                                  className="rounded-full bg-blue-200 p-2 text-black"
                              >
                                  <span className="font-semibold">
                                      {skill.value}
                                  </span>
                              </div>
                          ))
                        : 'Loading'}
                    {/*</ul>*/}
                </CardContent>
            </Card>
            <Card className="mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle>Certifications</CardTitle>
                    <CardDescription className="text-gray-700 pb-4 border-b">
                        Below are my certifications.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700">
                    {!isLoading
                        ? data?.certification?.map((cert: any, idx: number) => (
                              <div
                                  key={idx}
                                  className="border-l-4 border-teal-600 p-4 bg-gray-50 rounded-lg"
                              >
                                  <p className="text-gray-500">
                                      {cert.title} - {formatDate(cert.date)}
                                  </p>
                                  <Link to={cert.link} className="">
                                      view certificate
                                  </Link>
                              </div>
                          ))
                        : 'Loading'}
                </CardContent>
            </Card>
            <Card className="mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle>Testimonials</CardTitle>
                    <CardDescription className="text-gray-700 pb-4 border-b">
                        What my clients says about me.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700">
                    <blockquote className="italic text-gray-600">
                        "John design and development skills are unmatched. He's
                        truly a joy to work with."
                    </blockquote>
                    <p className="mt-2 text-gray-500">
                        - Sarah Connor, Project Manager
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
