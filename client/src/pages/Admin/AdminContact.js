import { Form, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { useEffect } from "react";

function AdminContact() {

  const [form] = Form.useForm(); // ✅ Create form instance
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    let response;
    try {
      dispatch(ShowLoading());
      if (portfolioData?.contact?._id) {
        response = await axios.put("/api/portfolio/update-contact", {
          _id: portfolioData.contact._id,
          ...values,
        });
      } else {
        response = await axios.post("/api/portfolio/add-contact", values);
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
    if (portfolioData?.contact) {
      form.setFieldsValue(portfolioData.contact);
    }
  }, [portfolioData, form]);

  return (
    <div>
      <Form form={form} onFinish={onFinish} layout="vertical" initialValues={{name: "", gender: "", email: "", mobile: "", age: "",address: ""}}>
        <Form.Item name="name" label="Nme">
          <input className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]" />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <input className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <input className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]" />
        </Form.Item>
        <Form.Item name="mobile" label="Mobile">
          <input className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]" />
        </Form.Item>
        <Form.Item name="age" label="Age">
          <input className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]" />
        </Form.Item>
        <Form.Item name="address" label="Address">
          <input className="h-20 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]" />
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

export default AdminContact;
