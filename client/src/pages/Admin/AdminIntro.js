import { Form, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { useEffect } from "react";

function AdminIntro() {

  const [form] = Form.useForm(); // ✅ Create form instance
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    let response;
    try {
      dispatch(ShowLoading());
      if (portfolioData?.intro?._id) {
        response = await axios.put("/api/portfolio/update-intro", {
          _id: portfolioData.intro._id,
          ...values,
        });
      } else {
        response = await axios.post("/api/portfolio/add-intro", values);
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
    if (portfolioData?.intro) {
      form.setFieldsValue(portfolioData.intro);
    }
  }, [portfolioData, form]);

  return (
    <div>
      <Form form={form} onFinish={onFinish} layout="vertical" initialValues={{welcomeText: "", firstName: "", lastName: "", caption: "", description: "",}}>
        <Form.Item name="welcomeText" label="Welcome Text">
          <input className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]" />
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
          <input className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]" />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <input className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]" />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <input className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <textarea className="h-20 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className="px-5 py-2 bg-secondary text-white rounded" type="submit">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminIntro;
