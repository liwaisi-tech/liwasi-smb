import BusinessItem from "./BusinessItem";

interface BusinessListProps {
  businessList: Business[];
  fullIcons?: boolean;
}

function BusinessList(props: BusinessListProps) {
  if (!props.businessList || props.businessList.length === 0) {
    return null
  }
  return (
    <div>
      {
        props.businessList.map((business, index) => (
          <BusinessItem key={index} business={business} fullIcons={props.fullIcons} />
        ))
      }
    </div>
  )
}

export default BusinessList