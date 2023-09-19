import React, { useEffect, useState } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';

interface DataType {
  create_at: Date ;
  key: string;
  name: string;
  end_time: Date ;
  start_time:Date ;
  stt:number;

  // age: number;
  address: string;
  driver:string ;
  number_people:number;
  start_location:string;
  end_location: string ;
 
}


const columns: ColumnsType<DataType> = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
    
  },
  {
    title: 'Date of Form ',
    dataIndex: 'create_at',
    // key: 'DateForm',
  },
  {
    title: 'Start Time',
    dataIndex: 'Start_Time',
    key: 'Start_Time',
    
    
  },
  {
    title: 'End Time',
    dataIndex: 'end_time',
    key: 'End_ Time',
  },
  {
    title: 'Start Location',
    dataIndex: 'start_location',
    key: 'Start_Location',
    
    
  },
  {
    title: 'End Location',
    dataIndex: 'end_location',
    key: 'End_Location',
  },
  {
    title: 'Number People',
    dataIndex: 'number_people',
    key: 'number_people',
    
    
  },
  {
    title: 'Driver',
    dataIndex: 'driver',
    key: 'Driver',
    
  },
  {
    title: 'status',
    key: 'status',
    dataIndex: 'status',
    render: (text, record: any) => {
        let color = '';
        if (record.status.toString() === 'COMPLETE_FORM') {
            color = 'green';
        } else if (record.status.toString() === 'CANCEL_FORM') {
            color = 'red';
        } else if (record.status.toString() === 'APPROVED') {
            color = 'volcano'; // Màu mặc định nếu không khớp với "COMPLETE" hoặc "Cancel"
        } else if (record.status.toString() === 'BOOKED_FORM') {
            color = 'yellow'
        } else {
            color = 'blue'
        }

        return (
            <Tag color={color}>
                {record.status.toString().toLocaleUpperCase()}
            </Tag>
        );
    },
},
  {
    title: "Actions",
    render: (_, record) => {
      return (
        <>
         
         <Button style={{backgroundColor:"primary"}} type="primary"> Infor Driver </Button>

         
        </>
      )
    }
  }
 
  
];





 

const BookedForm: React.FC = () => {
  const [dataForm , setDataForm] = useState([])

  useEffect(() => {
    const getData = async () => {
      const getToken = localStorage.getItem('token')
      const data = await axios.get("http://localhost:8000/api/v1/getBookedForm" , {
        headers: { Authorization: `Bearer ${getToken}` }
      }).then((response) => {
        const dataForm = response.data.data
        console.log('dataForm' , dataForm)
        setDataForm(dataForm.map((d:any , index:number) =>{
          return {
            stt:index +1 ,
            ...d 
          }
          
        }))
      })
    }
    getData()
    console.log('data :' , dataForm)

  },[])


  return(
    <div style={{display:'flex' , flexDirection:'column' , margin:"10px 20px 20px 20px", width:'1340px' , height:'300px'}}> 
      <h2 style={{marginBottom:'50px'}}>Booked Form</h2>
      <Table style={{width:'100%' , height:'300px' }} columns={columns} dataSource={dataForm} />
    </div>
  )

} 

export default BookedForm;