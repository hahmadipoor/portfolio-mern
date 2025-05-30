import { Form, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { useEffect } from "react";

function AdminAbout() {

  const [form] = Form.useForm(); // ✅ Create form instance
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    let response;
    const skillsArray = values.skills.split(",");
    values.skills=skillsArray;
    try {
      dispatch(ShowLoading());
      if (portfolioData?.about?._id) {
        response = await axios.put("/api/portfolio/update-about", {
          _id: portfolioData.about._id,
          ...values,
        });
      } else {
        response = await axios.post("/api/portfolio/add-about", values);
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (e) {
      dispatch(HideLoading());
      message.error(e.message);
    }
  };

  // ✅ Set values into form after portfolioData loads
  useEffect(() => {
    if (portfolioData?.about) {
      const skillsString=portfolioData.about.skills.join(", ");
      form.setFieldsValue({...portfolioData.about, skills: skillsString});
    }
  }, [portfolioData, form]);

  return (
    <div>
      <Form form={form} onFinish={onFinish} layout="vertical" initialValues={{lottieURL: "", description1: "", description2: "", skills: "", }}>
        <Form.Item name="lottieURL" label="Image">
          <input className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]" />
        </Form.Item>
        <Form.Item name="description1" label="Description 1">
          <input className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]" />
        </Form.Item>
        <Form.Item name="description2" label="Description 2">
          <input className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]" />
        </Form.Item>
        <Form.Item name="skills" label="Skills">
          <textarea className="h-20 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className="px-5 py-2 bg-secondary text-white rounded" type="submit">Save</button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout;
