import { firestore } from "components/firebase"
import { collection, onSnapshot } from "firebase/firestore"
import { useEffect } from "react"
import {
  Datagrid,
  EditButton,
  List,
  TextField,
  WithRecord,
  useRefresh
} from "react-admin"
import { Report } from "."
import { StatusField } from "./common"
import { CreateMockReport } from "./setUp/CreateMockReport"

export function ListReports() {
  const refresh = useRefresh()
  useEffect(() => {
    const reportsRef = collection(firestore, "reports")
    const unsubscribe = onSnapshot(
      reportsRef,
      () => refresh(),
      (e: Error) => console.log(e)
    )

    return () => unsubscribe()
  }, [])
  return (
    <>
      <CreateMockReport />
      <List>
        <Datagrid rowClick={"edit"}>
          <TextField source="id" label="report id" />
          <TextField source="testimonyId" />
          <TextField
            source="resolution.archiveTestimonyId"
            label="archived id"
          />
          <TextField source="reason" />
          <StatusField label="status" />
          <TextField source="resolution.resolution" label="resolution" />
          <TextField source="resolution.moderatorUid" label="moderated by" />
          <WithRecord
            label="Resolve Report"
            render={(record: Report) => {
              const hasBeenResolved =
                record.resolution?.resolution !== undefined
              return hasBeenResolved ? (
                <div>resolved</div>
              ) : (
                <EditButton label="resolve report" disabled={hasBeenResolved} />
              )
            }}
          />
        </Datagrid>
      </List>
    </>
  )
}
