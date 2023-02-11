import Select from 'react-select'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'red' : 'var(--white)',
    padding: 20,
	margin: 0,
	backgroundColor: 'var(--grey-dark)'
  }),
  menu: (provided) => ({
    ...provided,
	margin: 0,
	borderRadius: 0,
	boxShadow: 'var(--shadow)'
  }),
  menuList: (provided) => ({
    ...provided,
	margin: 0,
	padding: 0,
  }),
 control: (provided) => ({
    ...provided,
	backgroundColor: 'var(--grey-dark)',
	color: 'var(--white)',
	border: '1px solid pink'
  }),
  singleValue: (provided) => ({
   	...provided,
	color: 'var(--white)',
  }),
  placeholder: (provider) => ({
   	...provider,
	color: 'var(--white)'
  }),
  indicatorSeparator: (provider) => ({
   	...provider,
	margin: '0'
  }),
}

const CustomSelect = ({select, setSelect, options}) => {
	return(
		<div className="filter__select select-filter">
			<Select styles={customStyles} options={options} defaultValue={select} onChange={setSelect}/>
		</div>
	)
}

export {CustomSelect}