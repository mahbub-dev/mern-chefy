/* eslint-disable react/prop-types */
const Input = ({ title, type, name, placeholder, value, onChange }) => {
    return (
        <>
            <label htmlFor={name} className="text-left mb-[15px] md:text-[20px] text-[17px] font-[600] text-[--text-color]">{title}</label>
            <input onChange={onChange}  type={type} name={name} value={value} className="w-100 p-[10px] bg-[--bg-color] mb-[24px] rounded" placeholder={placeholder} />
        </>
    )
}

export default Input