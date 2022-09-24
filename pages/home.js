import React from 'react'
import { app, db } from  '../Firebaseconfig'
import { collection, addDoc, deleteDoc, updateDoc, getDocs } from 'firebase/firestore'
import { useState } from 'react' 


function Home() {
  const [product, setProduct] = useState(null)
  const [price, setPrice] = useState(null)
  const database = collection(db, 'products')
  const addData = () => {
    addDoc(database, {
      name: product,
      price: Number(price),
    })
    .then(() => {
      alert('data sent')
      setProduct('')
      setPrice('')
    })
    .catch((err) => alert(`error data not send the reasion is ${err}`))
  }

  const getData = async () => {
    await getDocs(database)
    .then((res) => {
      res.docs.map((data) => {
        return (
          console.log(data.data())
        )
      })
    })
  }
  getData()
  return (
    <div>
      <input
        className="w-72 h-10 mx-auto  border-2 border-black rounded-lg p-5"
        placeholder="product"
        type="text"
        name="product"
        id="product"
        onChange={(event) => setProduct(event.target.value)}
        value={product}
      />
      <input
        className="w-72 h-10 mx-auto  border-2 border-black rounded-lg p-5"
        placeholder="price"
        type="number"
        name="price"
        id="price"
        onChange={(event) => setPrice(event.target.value)}
        value={price}
      />
      <button
        className="bg-lime-300 w-24 h-10 mx-auto rounded-xl"
        type="submit"
        onClick={() => addData()}
      >
        Add
      </button>
      
    </div>
  )
}

export default Home