import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Avatar, Button, Form, List, Select, Space } from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import axios from 'axios';

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const FormUser: React.FC = () => {

  const [listForm , setListForm] = useState([])
  useEffect(() => {
    const getListDriver = async () => {

      const getToken = localStorage.getItem('token')
      const data = await axios.get("http://localhost:8000/api/v1/getListFormApproved", {
        headers: { Authorization: `Bearer ${getToken}` }
      }).then((response) => {
        const ListDriver = response.data.data
        console.log("ListDriver", ListDriver)
        setListForm(ListDriver.map((d: any, index: number) => {
          return {
            stt: index + 1,
            ...d
          }
        }))


      })

    }
    getListDriver()
  }, [])

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  
  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  const filterOption = (input: string, option: { label: string; value: string }) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  


  return (
    <div>
      <h1>List Form Approved </h1>
      <List
  style={{border:'2px solid' , width:"1400px"}}
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 5,
      
    }}
    
    dataSource={data}
    
    renderItem={(item) => (
      
      
      <List.Item
        
        
        
        key={item.title}
       
        // extra={
        //   <img
        //     width={320}
        //     alt="logo"
        //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        //   />
        // }
      >


        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
          
        />
        
        {item.content}
        <Form> 
        <Select
    showSearch
    placeholder="Select a Car"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    // filterOption={filterOption}
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />
          
          <button> Booked</button>
        </Form >
        
      </List.Item>
      
      
    )}
  />
    </div>
  )
};

export default FormUser;