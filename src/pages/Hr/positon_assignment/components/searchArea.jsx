import Button from "../../../../components/Button";
import SelectInput from "../../../../components/SelectInput";

export default function SearchArea () {
    const area = [
        {id:1,text:"Accra Office"},{id:2,text:"Accra Guest House"}
    ]
    const area2 = [
        {id:1,text:"Accra Office"},{id:2,text:"Accra Guest House"}
    ]

    const handleClick = (e) => {
        e.preventDefault()
    }
  
    return (
        <>
            <section id="searchSection">
                <form className="flex gap-4 w-full bg-primary-surface h-24 rounded-lg items-center justify-center px-4 shadow-sm">
                <SelectInput name={"select_department"} options={area} disabledOption={"Department"}/>
                <SelectInput name={"select_department"} options={area2} disabledOption={"Position"}/>
                <button type="submit" onClick={handleClick} className="bg-primary-main text-white px-6 py-2 rounded-lg h-12">Search</button>
                </form>
            </section>
        </>
    );
}