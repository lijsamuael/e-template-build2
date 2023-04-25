import AddedItems from "./addedItems";

export default function NewArivals() {
  return (
    <>
      <h4 className="text-center pt-4 lg:pt-2">ADD THIS NEW ARRIVALS!</h4>
      <AddedItems
        name="Deez Nutz"
        price={29.9}
        quantity={4}
        image="deeznutz.png"
        isNew={true}
      />
      <AddedItems
        name="Deez Nutz Trucker Hat"
        price={24.99}
        quantity={4}
        image="hat.png"
        isNew={true}
      />
    </>
  );
}
