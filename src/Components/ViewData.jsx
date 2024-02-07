import {Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

const ViewData=() => {
    var [users,setUsers]= useState([]) 
    var [loading,SetLoading] = useState(false)

    useEffect(()=>{
        SetLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
    console.log(res)
    setUsers(res.data)
    SetLoading(false)
    })
    .catch(err=>console.log(err))
    },[])

    // const loaddata=()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    // .then((res)=>{
    // console.log(res)
    // setUsers(res.data)
    // })
    // .catch(err=>console.log(err)) 
    // }

    

       return (
    <div>
   
{/* <Button variant="contained" onClick={loaddata}>load data</Button> */}
     {loading? <CircularProgress color='primary'/>: <TableContainer>
<Table>
    <TableHead>
        <TableRow>
    <TableCell>name</TableCell>
    <TableCell>username</TableCell>
    <TableCell>avatar</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {users.map((val,i)=>{
            return(
                <TableRow><TableCell>{val.name}</TableCell>
                <TableCell>{val.username}</TableCell>
                <TableCell>{val.email}</TableCell>
                {/* <TableCell><img src={val.avatar_url} width={"100px"}/>
                </TableCell> */}
                </TableRow>
            )
        })}

    </TableBody>
</Table>
</TableContainer>}
    


    </div>
  )
}

export default ViewData