import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {

	const handleAddCoffee = event =>{
		event.preventDefault();

		const form = event.target;
		const name = form.name.value;
		const quantity = form.quantity.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;
		const photo = form.photo.value;

		const newCoffee = {name, quantity, supplier, supplier, taste, category, details, photo};
		console.log(newCoffee);

		//send data to the server
		fetch('http://localhost:5000/coffee', {
			method: 'POST',
			headers: {
				'content-type':'application/json'
			},
			body: JSON.stringify(newCoffee)
		})
			.then(res => res.json())
			.then(data =>{
				console.log(data);

				if(data.insertId){
					Swal.fire({
						title: 'Success!',
						text: 'Coffee added a successfully',
						icon: 'success',
						confirmButtonText: 'Cool'
					  })
				}
			})
	}
	return (
		<div className='bg-[#F4F3F0] p-24'>
			<h2 className='text-4xl font-bold'>Add a Coffee</h2>
			<form onSubmit={handleAddCoffee}>

				{/* //form coffee name and quantity row  */}
				<div className='md:flex'>
				<div className="form-control md:w-1/2">
					<label className="label">
						<span className="label-text">Coffee Name</span>
					</label>
					<label className="input-group">
						<input type="text" placeholder="Coffee Name" name='name' className="input input-bordered w-full" />
					</label>
					</div>
				<div className="form-control md:w-1/2 ml-4">
					<label className="label">
						<span className="label-text">Available Quantity</span>
					</label>
					<label className="input-group">
						<input type="text" placeholder="Available Quantity"  name='quantity' className="input input-bordered w-full" />
					</label>
					</div>
				</div>

				{/* //form supplier name and taste row  */}
				<div className='md:flex'>
				<div className="form-control md:w-1/2">
					<label className="label">
						<span className="label-text">Supplier Name</span>
					</label>
					<label className="input-group">
						<input type="text" placeholder="Supplier Name" name='supplier' className="input input-bordered w-full" />
					</label>
					</div>
				<div className="form-control md:w-1/2 ml-4">
					<label className="label">
						<span className="label-text">Taste</span>
					</label>
					<label className="input-group">
						<input type="text" placeholder="taste"  name='taste' className="input input-bordered w-full" />
					</label>
					</div>
				</div>

				{/* //form category and details row  */}
				<div className='md:flex'>
				<div className="form-control md:w-1/2">
					<label className="label">
						<span className="label-text">Category</span>
					</label>
					<label className="input-group">
						<input type="text" placeholder="Category" name='category' className="input input-bordered w-full" />
					</label>
					</div>
				<div className="form-control md:w-1/2 ml-4">
					<label className="label">
						<span className="label-text">Details</span>
					</label>
					<label className="input-group">
						<input type="text" placeholder="Details"  name='details' className="input input-bordered w-full" />
					</label>
					</div>
				</div>

				{/* //form photo url row  */}
				<div className=''>
				<div className="form-control w-full">
					<label className="label">
						<span className="label-text">Photo URL</span>
					</label>
					<label className="input-group">
						<input type="text" placeholder="Photo URL" name='photo' className="input input-bordered w-full" />
					</label>
					</div>
				</div>
				<button className='btn btn-block mt-4 bg-gradient-to-r from-green-400 to-orange-400'>Add Coffee</button>
			</form>
		</div>
	);
};

export default AddCoffee;