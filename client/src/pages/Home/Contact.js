import SectionTitle from "../../components/SectionTitle";

function Contact(){

    const user={
        "name": "Hossein Ahmadipoor",
        "age": 42,
        "gender": "Male",
        "email": "ahmadipoor.h@gmail.com",
        "mobile": "+989173629258",
        "country": "Iran"
    }

    return (
        <div>
            <SectionTitle title="Contact Info"/>
            <div className="flex">
                <div className="p-4 w-1/3">
                  {Object.entries(user).map(([key, value]) => (
                    <div key={key} className="mb-2">
                        <span className="font-semibold capitalize">{key}:</span> {value}
                    </div>
                  ))}
                </div>
                <div className="flex gap-x-4 mt-10">
                            <a href="https://www.facebook.com">
                                <i class="ri-facebook-circle-fill text-8xl text-blue-600"></i>
                            </a>
                            <a href="https://www.instagram.com/">
                                <i className="ri-instagram-fill text-8xl text-pink-500"></i>
                            </a>
                             <a href="https://github.com">
                                <i class="ri-github-fill text-8xl text-[#xEDCA]"></i>
                            </a>
                            <a href="https://x.com">
                                <i class="ri-twitter-fill text-8xl text-[#1DA1F2]"></i>
                            </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;