const message={
    required:"this field is required",
    minWidth:(min)=>`this field must be more than ${min} chars`,
    maxWidth:(max)=>`this field must be less than ${max} chars`
}

const rules={
    required:(val)=>val?"pass":message.required,
    minWidth:(val,min)=> val.length <min ?message.minWidth(min):"pass",
    maxWidth:(val,max)=>val.length>max ?message.maxWidth(max):"pass"
}

const validator={
    title:(val,min,max)=>{
        return [
            rules.required(val),
            rules.minWidth(val,min),
            rules.maxWidth(val,max)
        ]
    },
    content:(val,min,max)=>{
        return [
            rules.required(val),
            rules.minWidth(val,min),
            rules.maxWidth(val,max)
        ]
    }
}
const validate=(title,content)=>{
    const errors={title:"",content:""}
    errors.title=validator.title(title,7,200).find((el)=> el !=="pass")
    errors.content=validator.content(content,7,200).find((el)=> el !=="pass")
return {...errors}
}
export default validate