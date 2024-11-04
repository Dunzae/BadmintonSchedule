import { useState, useCallback } from "react"
import { useAppDispatch } from "hook/redux"
import { changeQuery } from "../slice"
import Form from "../components/Form"

export default function FormContainer(): React.ReactElement {
  const dispatch = useAppDispatch()
  const [tempQuery, setTempQuery] = useState("")

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTempQuery(e.target.value)
    },
    [setTempQuery]
  )

  const onSubmit = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault()
      dispatch(changeQuery(tempQuery))
    },
    [dispatch, tempQuery]
  )

  return <Form query={tempQuery} onChange={onChange} onSubmit={onSubmit} />
}
