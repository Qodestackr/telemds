import BreadCrumb from "@/components/breadcrumb";

export default function InsurancePage() {
    return (
        <div>
            <BreadCrumb items={[{ title: "Insurance", link: "/dashboard/Insurance" }]} />
            Insurance Page
        </div>
    )
}