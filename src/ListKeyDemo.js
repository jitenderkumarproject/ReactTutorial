//keys is used for unique value in array or object


export default function ListKeyDemo() {
  const state = ["Delhi", "Haryana", "Punjab", "Utter Pradesh","Delhi" ];
//   const state = ["Delhi", "Haryana", "Punjab", "Utter Pradesh" ];

//   const result = state.map((state) => <h1 key={state}> {state}</h1>);
  const result = state.map((state, index) => <h1 key={index}> {state}</h1>);

  return (
    <div align="center">
      <h1>{result}</h1>
    </div>
  );
}
