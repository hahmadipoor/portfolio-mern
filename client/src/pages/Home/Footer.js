
function Footer(){

    return (
            <div className="h-[5vh] w-full mb-10">
                    <div className="h-[1px] w-full bg-primary mb-1"></div>
                    <div className="text-center text-xm">
                      © {new Date().getFullYear()} Hossein Ahmadipoor. All rights reserved.
                    </div>
            </div>

    )
}

export default Footer;