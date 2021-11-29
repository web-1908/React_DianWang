import React, { Component ,useState } from 'react'

import { Table, Input, InputNumber, Popconfirm, Form,message  } from 'antd';

export default class table extends Component {
  constructor(props){
    
    super(props)
    this.state={
    }
  }
  componentWillUpdate(){
    //测试输出PeiZhi组件传来的表数据数组data
    console.log(this.props.data)
  }
  delete(){

  }
    render() {

      
      const EditableCell = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
      }) => {
        const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
        return (
          <td {...restProps}>
            {editing ? (
              <Form.Item
                name={dataIndex}
                style={{
                  margin: 0,
                }}
                rules={[
                  {
                    required: true,
                    message: `Please Input ${title}!`,
                  },
                ]}
              >
                {inputNode}
              </Form.Item>
            ) : (
              children
            )}
          </td>
        );
      };
      
      const EditableTable = () => {
        const [form] = Form.useForm();
        const [data, setData] = useState(this.props.data);
        const [editingKey, setEditingKey] = useState('');
      
        const isEditing = record => record.key === editingKey;
        //列类型
        const edit = record => {
          form.setFieldsValue({
            name: '',
            type: '',
            IPaddress: '',
            MACaddress: '',
            time:'',
            ...record,
          });
          setEditingKey(record.key);
        };
      
        const cancel = () => {
          setEditingKey('');
        };
      
        const save = async key => {
          try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex(item => key === item.key);
      
            if (index > -1) {
              const item = newData[index];
              newData.splice(index, 1, { ...item, ...row });
              setData(newData);
              setEditingKey('');
            } else {
              newData.push(row);
              setData(newData);
              setEditingKey('');
            }
          } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
          }
        };
       
        // 添加列数据
        const columns = [
          {
            title: '设备名称',
            dataIndex: 'name',
            width: '23%',
            editable: true,
          },
          {
            title: '设备类型',
            dataIndex: 'type',
            width: '12%',
            editable: true,
          },
          {
            title: 'IP地址',
            dataIndex: 'IPaddress',
            width: '20%',
            editable: true,
          },
          {
            title: 'MA地址',
            dataIndex: 'MACaddress',
            width: '20%',
            editable: true,
          },
          {
            title: '创建时间',
            dataIndex: 'time',
            width: '12%',
            editable: true,
          },
          {
            title: '操作',
            dataIndex: 'operation',
            render: (_, record) => {
              const editable = isEditing(record);
              return editable ? (
                <span>
                  <a
                    href="javascript:;"
                    onClick={() => save(record.key)}
                    style={{
                      marginRight: 8,
                    }}
                  >
                    Save
                  </a>
                  <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                    <a>Cancel</a>
                  </Popconfirm>
                </span>
              ) : (
                <div>
                  <a disabled={editingKey !== ''} onClick={() => edit(record)} style={{marginRight:'10px'}}>
                    编辑
                  </a>
                  {/* 删除操作：forEach遍历父组件传来的表数据，判断循环到的每条表数据key和点击删除操作数据的key是否相等，相等则获取该点击数据在数组中的下标(删除前面数据后面数据下标会变而key不变)，然后根据下标删除数据。 */}
                  <a disabled={editingKey !== ''} onClick={() =>{console.log(record);this.props.data.forEach((item,i)=>{if(item.key==record.key){this.props.data.splice(i,1)}});this.setState({})}}>
                    删除
                </a>
                </div>
                
                
              );
            },
          },
        ];
        const mergedColumns = columns.map(col => {
          if (!col.editable) {
            return col;
          }
      
          return {
            ...col,
            onCell: record => ({
              record,
              inputType: col.dataIndex === 'age' ? 'number' : 'text',
              dataIndex: col.dataIndex,
              title: col.title,
              editing: isEditing(record),
            }),
          };
        });
        return (
          <Form form={form} component={false}>
            <Table
              components={{
                body: {
                  cell: EditableCell,
                },
              }}
              bordered
              dataSource={data}
              columns={mergedColumns}
              rowClassName="editable-row"
              pagination={{
                onChange: cancel,
              }}
            />
          </Form>
        );
      };
        return (
            <div>
                <EditableTable size='middle'/>
            </div>
        )
    }
}
