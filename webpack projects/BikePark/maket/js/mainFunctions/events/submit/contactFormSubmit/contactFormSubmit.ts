import { TcontactForm } from "@js/components/middleComponents/contactMain/contactFormGeneric"
import { UseFormReset } from "react-hook-form"

type Tprops = {
    data: TcontactForm,
    reset: UseFormReset<TcontactForm>
}
const contactFormSubmit = ({data, reset}: Tprops) => {
    reset()
}
export default contactFormSubmit