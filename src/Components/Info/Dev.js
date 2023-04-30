const features = [
    { name: 'Chương trình học V LEARNING' },
    { name: 'Đào tạo lập trình chuyên sâu' },
    { name: 'Phương pháp đào tạo hiện đại' },
    { name: 'Hỗ trợ ngoài giờ học' },
    { name: 'Hỗ trợ việc làm' },
    { name: 'Chứng chỉ sau khi kết thúc' },
]

export default function Dev() {
    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">V LEARNING ?</h2>
                    <p className="mt-4 text-gray-500">
                        Nơi hội tụ kiến thức
                        Đây là nền tảng giảng dạy và học tập trực tuyến được xây dựng để hỗ trợ phát triển giáo dục trong thời đại công nghiệp 4.0, được xây dựng dựa trên cơ sở quan sát toàn bộ các nhu cầu cần thiết của một lớp học offline. Từ đó đáp ứng và đảm bảo cung cấp các công cụ toàn diện, dễ sử dụng cho giáo viên và học sinh, giúp tạo nên một lớp học trực tuyến thú vị và hấp dẫn.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>


                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src="https://cybersoft.edu.vn/wp-content/uploads/2019/01/IMG_3078.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://cybersoft.edu.vn/wp-content/uploads/2022/10/banner_5.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://cybersoft.edu.vn/wp-content/uploads/2019/04/Screen-Shot-2019-02-24-at-3.37.54-PM.png"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://cyberlearn.vn/wp-content/uploads/2019/04/front-bt1.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="rounded-lg bg-gray-100"
                    />
                </div>
            </div>
        </div>
    )
}