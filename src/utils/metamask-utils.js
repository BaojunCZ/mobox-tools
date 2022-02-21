export const sendTransaction = async (
  contractInterface,
  functionName,
  values,
  from,
  to
) => {
  const fragment = contractInterface.getFunction(functionName);
  const payload = contractInterface.encodeFunctionData(fragment, values);
  const transactionParameters = {
    from,
    to,
    data: payload,
  };
  return await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [transactionParameters],
  });
};
