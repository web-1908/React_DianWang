import React, { Component } from 'react'
import { Table } from 'antd';

export default class table extends Component {
  constructor(props){
    super(props)
    this.state={
      //接收父组件PeiZhi传来的参数
      name:'',
      type:'',
      IPaddress:'',
      MACaddress:'',
      // obj:{
      //     key: 6,
      //     name: this.name,
      //     type: this.type,
      //     IPaddress: this.IPaddress,
      //     MACaddress:this.MACaddress,
      //     CreateTime:'2020/5/1',
      //     Action:'编辑'
      // }
    }
  }
  //实时刷新父组件传来的参数更新到state中！
  componentWillReceiveProps(props) {
    this.setState({
        name: props.name,
        type: props.type,
        IPaddress: props.IPaddress,
        MACaddress: props.MACaddress,
    })
  }
//创建时间
    render() {
        const columns = [
            {
              title: '设备名称',
              width: 150,
              dataIndex: 'name',
              key: 'name',
              fixed: 'left',
            },
            {
              title: '设备类型',
              width: 100,
              dataIndex: 'type',
              key: 'age',
              fixed: 'left',
            },
            {
              title: 'IP地址',
              dataIndex: 'IPaddress',
              key: '1',
              width: 150,
            },
            {
              title: 'MAC地址',
              dataIndex: 'MACaddress',
              key: '2',
              width: 150,
            },
            {
              title: '创建时间',
              dataIndex: 'CreateTime',
              key: '3',
              width: 150,
            },
            {
              title: '操作',
              dataIndex: 'Action',
              key: '4',
              width: 80,
            },
          ];
          const data = [
            {
              key: 1,
              name: `名称1智能国网商城`,
              type: '计算机设备',
              IPaddress: `192.168.31.168`,
              MACaddress:'xx-xx-xx-xx-bb',
              CreateTime:'2020-05-01',
              Action:'编辑'
            },
            {
                key: 2,
                name: `名称2`,
                type: '展示设备',
                IPaddress: `192.168.31.168`,
                MACaddress:'xx-xx-xx-xx-bb',
                CreateTime:'2020-05-01',
                Action:'编辑'
              },
              {
                key: 3,
                name: `名称3`,
                type: '计算机设备',
                IPaddress: `192.168.31.168`,
                MACaddress:'xx-xx-xx-xx-bb',
                CreateTime:'2020-05-01',
                Action:'编辑'
              },
              {
                key: 4,
                name: `名称4`,
                type: '展示设备',
                IPaddress: `192.168.31.168`,
                MACaddress:'xx-xx-xx-xx-bb',
                CreateTime:'2020-05-01',
                Action:'编辑'
              },
              {
                key: 5,
                name: `名称5`,
                type: '计算机设备',
                IPaddress: `192.168.31.168`,
                MACaddress:'xx-xx-xx-xx-bb',
                CreateTime:'2020-05-01',
                Action:'编辑'
              },
              {
                key: 6,
                name: `名称6`,
                type: '展示设备',
                IPaddress: `192.168.31.168`,
                MACaddress:'xx-xx-xx-xx-bb',
                CreateTime:'2020-05-01',
                Action:'编辑'
              },
              // this.state.obj
          ];
        return (
            <div>
                <Table columns={columns} dataSource={data}  />
            </div>
        )
    }
}
