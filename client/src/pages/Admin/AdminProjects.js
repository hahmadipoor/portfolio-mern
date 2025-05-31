import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form,message } from "antd";
import axios from "axios";
import { ShowLoading, HideLoading, RefetchData } from "../../redux/rootSlice";

function AdminProjects() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    
    let response;
    const technologiesArray = values.technologies.split(",");
    values.technologies=technologiesArray;
    try {
      dispatch(ShowLoading());
      if (selectedItemForEdit) {
        response = await axios.put("/api/portfolio/update-project", {
          _id: selectedItemForEdit._id,
          ...values,
        });
      } else {
        response = await axios.post("/api/portfolio/add-project", values);
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
      const response = await axios.delete(`/api/portfolio/delete-project/${item._id}`);
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
          form.setFieldsValue({title:"", description:"", image:"", link:"", technologies:""})
          }}>
            Add Project
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {projects.map((project) => (
          <div className="shadow border p-5 border-gray-400 flex flex-col">
            <h1 className="text-primary text-xl font-bold">{project.title}</h1>
            <img src={project.image} alt ="" className="h-60 w-80"/>
            <h1>Description : {project.description}</h1>
            <p>{project.technologies.join(",")}</p>
            <a href={project.link} className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 text-xl">link</a>
            <div className="flex justify-end gap-5 mt-5">
              <button className="bg-red-500 text-white px-5 py-2 rounded" onClick={()=>{onDelete(project)}}>Delete</button>
              <button className="bg-secondary text-white px-5 py-2 rounded" 
                onClick={()=>{
                setSelectedItemForEdit(project); 
                setShowAddEditModal(true); 
                const technologiesString=project.technologies.join(", ");
                form.setFieldsValue({...project,technologies:technologiesString});}}>
                  Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal open={showAddEditModal} 
             title={selectedItemForEdit ? "Edit Project" : "Add Project"}
              onCancel={() => setShowAddEditModal(false)}
              footer={null}>
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item name="title" label="Title">
            <input className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]"/>
          </Form.Item>
          <Form.Item name="description" label="Description">
            <textarea className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]"/>
          </Form.Item>
          <Form.Item name="image" label="Image">
            <input  className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]"/>
          </Form.Item>
          <Form.Item name="link" label="link">
            <input className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]"/>
          </Form.Item>
          <Form.Item name="technologies" label="Technologies">
            <input className="h-10 w-full pl-5 border border-primary rounded focus:outline-none focus:border-2 focus:border-[#CC4400]"/>
          </Form.Item>
          <div className="flex justify-end w-full">
            <button className="border-secondary bg-secondary text-white px-5 py-2 mx-1 rounded" type="button" 
                onClick={() => setShowAddEditModal(false)}>
                  Cancel
            </button>
            <button className="border-secondary px-5 py-2 bg-secondary text-white rounded mx-1" type="submit">
              {selectedItemForEdit?"Update":"Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default AdminProjects;