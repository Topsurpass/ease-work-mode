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

export default function RightProfile() {
    const { data, isLoading } = useGetJobSeekerById();
    return (
        <div className="col-span-2 md:col-span-2 space-y-8 w-full">
            <Card className="mx-auto shadow-lg">
                <CardHeader className="pb-4 border-b">
                    <CardTitle>Portfolio</CardTitle>
                    <CardDescription className="text-gray-700">
                        Some of my best work
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700 py-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {!isLoading
                            ? data?.portfolio?.map(
                                  (portfolioItem: any, idx: number) => (
                                      <div key={idx} className="mt-4">
                                          {/* Display image preview for the portfolio link */}
                                          <a
                                              href={portfolioItem.link}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                          >
                                              <img
                                                  src="https://source.unsplash.com/random/400x300"
                                                  alt={
                                                      portfolioItem.description
                                                  }
                                                  className="w-full h-64 object-cover rounded-md shadow-md"
                                              />
                                          </a>
                                          <p className="mt-2 text-gray-700">
                                              {portfolioItem.description}
                                          </p>
                                      </div>
                                  )
                              )
                            : 'Loading'}
                    </div>
                </CardContent>
            </Card>
            <Card className=" mx-auto shadow-lg">
                <CardHeader className="pb-4 border-b">
                    <CardTitle>Work History</CardTitle>
                    <CardDescription className="text-gray-700">
                        Previous work experience
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700 py-5">
                    <div className="space-y-6">
                        {!isLoading
                            ? data?.experience?.map((exp: any, idx: number) => (
                                  <div
                                      key={idx}
                                      className="border-l-4 border-teal-600 p-4 bg-gray-50 rounded-lg"
                                  >
                                      <h4 className="text-lg font-semibold text-gray-800">
                                          {exp.jobTitle}
                                      </h4>
                                      <p className="text-gray-500">
                                          {exp.companyName} |{' '}
                                          {`${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}`}
                                      </p>
                                      <p className="text-gray-700 mt-2">
                                          {exp.description}
                                      </p>
                                  </div>
                              ))
                            : 'Loading'}
                    </div>
                </CardContent>
            </Card>
            <Card className="mx-auto shadow-lg">
                <CardHeader className="pb-4 border-b">
                    <CardTitle>Employment History</CardTitle>
                    <CardDescription className="text-gray-700">
                        Career path so far
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700 py-5">
                    <ul className="space-y-4">
                        {!isLoading
                            ? data?.experience?.map((exp: any, idx: number) => (
                                  <li key={idx}>
                                      <h4 className="font-bold text-gray-800">
                                          {exp.jobTitle}
                                      </h4>
                                      <p className="text-gray-500">
                                          {exp.companyName} |{' '}
                                          {`${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}`}
                                      </p>
                                  </li>
                              ))
                            : 'Loading'}
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}
