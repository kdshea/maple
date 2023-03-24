import { useCallback } from "react"
import { BillContent, usePublishedTestimonyListing } from "../db"
import ViewTestimony from "../TestimonyCard/ViewTestimony"
import { BillProps } from "./types"

export const BillTestimonies = (
  props: BillProps & {
    className?: string
  }
) => {
  const { id, court } = props.bill
  const testimony = usePublishedTestimonyListing({
    billId: id,
    court
  })

  const { items } = testimony

  const refreshtable = useCallback(() => {
    items.execute()
  }, [items])

  return (
    <>
      <ViewTestimony
        {...testimony}
        isUser={false}
        className={props.className}
      />
    </>
  )
}
