import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form,message } from "antd";
import axios from "axios";
import { ShowLoading, HideLoading, RefetchData } from "../../redux/rootSlice";

function AdminExperiences() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    
    let response;
    try {
      dispatch(ShowLoading());
      if (selectedItemForEdit) {
        response = await axios.put("/api/portfolio/update-experience", {
          _id: selectedItemForEdit._id,
          ...values,
        });
      } else {
        response = await axios.post("/api/portfolio/add-experience", values);
      }
      setShowAddEditModal(false);
      dispatch(HideLoading());
      dispatch(RefetchData(true));
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

  const onDelete = async (item) => {
    console.log(item);
    try {
      dispatch(ShowLoading());
      const response = await axios.delete(`/api/portfolio/delete-experience/${item._id}`);
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(RefetchData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <button className="bg-secondary text-white px-2 py-2 rounded" onClick={()=>{ 
          setSelectedItemForEdit(null); 
          setShowAddEditModal(true); 
          form.setFieldsValue({period:"", company:"", title:"", description:""})
          }}>
            Add Experience
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {experiences.map((experience) => (
          <div className="shadow border p-5 border-gray-400 flex flex-col">
            <h1 className="text-primary text-xl font-bold">{experience.period}</h1>
            <h1>Company : {experience.company}</h1>
            <h1>Role : {experience.title}</h1>
            <h1>{experience.description}</h1>
            <div className="flex justify-end gap-5 mt-5">
              <button className="bg-red-500 text-white px-5 py-2 rounded" onClick={()=>{onDelete(experience)}}>Delete</button>
              <button className="bg-secondary text-white px-5 py-2 rounded" onClick={()=>{setSelectedItemForEdit(experience); setShowAddEditModal(true); form.setFieldsValue(experience);}}>Edit</button>
            </div>
          </div>
        ))}
      </div>

      <Modal open={showAddEditModal} 
             title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
              onCancel={() => setShowAddEditModal(false)}
              footer={null}>
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item name="period" label="Period">
            <input className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]"/>
          </Form.Item>
          <Form.Item name="company" label="Company">
            <input className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]"/>
          </Form.Item>
          <Form.Item name="title" label="Title">
            <input  className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]"/>
          </Form.Item>
          <Form.Item name="description" label="Description">
            <input className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]"/>
          </Form.Item>
          <div className="flex justify-end w-full">
            <button className="border-secondary bg-secondary text-white px-5 py-2 mx-1 rounded" type="button" onClick={() => setShowAddEditModal(false)}>Cancel</button>
            <button className="border-secondary px-5 py-2 bg-secondary text-white rounded mx-1" type="submit">{selectedItemForEdit?"Update":"Add"}</button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default AdminExperiences;