import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/axiosPublic";

const AddDua = () => {

    const axiosPublic=useAxiosPublic()

    const handleSubmit=e=>{
        e.preventDefault()
        const title=e.target.title.value; 
        const description=e.target.description.value; 
        const reference=e.target.reference.value; 

        const dua={title,description,reference};

        axiosPublic.post('/dua',dua)
        .then(data=>{
           if(data.data.insertedId){
              toast.success('Dua is added')
            }
        })

    }

    return (
        <div>
               <form onSubmit={handleSubmit} className="card-body">
              


                <div className="flex gap-6">
                <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input name="title" type="text" placeholder="Title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input name="description" type="text" placeholder="Description" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Reference</span>
          </label>
          <input name="reference" type="text" placeholder="Reference" className="input input-bordered" required />
          
        </div>
                </div>


        <div className="form-control mt-6">
          <button className="bg-green-400 p-3 rounded-lg">Add Dua</button>
        </div>
      </form>
        </div>
    );
};

export default AddDua;