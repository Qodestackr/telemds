import BreadCrumb from "@/components/breadcrumb";
import { KanbanBoard } from "@/components/kanban/kanban-board";
import NewTaskDialog from "@/components/kanban/new-task-dialog";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";

const breadcrumbItems = [{ title: "Manage Appointments", link: "/dashboard/appointment-manager" }];
export default function page() {
  return (
    <>
      <ScrollArea className="snap-mandatory snap-x">
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between text-blue-500">
            <Heading title={`Appointment Manager`} description="Manage appointment workflow here, drag and drop to reorder." />
            <NewTaskDialog />
          </div>
          <KanbanBoard />
        </div>
      </ScrollArea>
    </>
  );
}
