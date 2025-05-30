import Header from "../../components/Header";
import {Tabs} from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminExperiences from "./AdminExperiences";

const {TabPane} =Tabs;

function Admin() {

  const onChange=(key)=>{
    console.log(key);
  }  

  return (
  <div>
        <Header />
        <div className="mt-5 p-5">
            <Tabs defaultActiveKey="1" onChange={onChange}>
                <TabPane tab="Intro" key="1">
                    <AdminIntro />
                </TabPane>
                <TabPane tab="About" key="2">
                    <AdminAbout />
                </TabPane>
                <TabPane tab="Experience" key="3">
                    <AdminExperiences />
                </TabPane>
            </Tabs>
        </div>

  </div>
  );
}

export default Admin;