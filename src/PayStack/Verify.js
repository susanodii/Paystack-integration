

export const verifyTranction = async (axios, secretKey, ref) =>{
    try {
        const response = await axios.get(
          `https://api.paystack.co/transaction/verify/${ref}`,
          {
            headers: {
              Authorization: `Bearer ${secretKey}`,
              "content-type": "application/json",
            },
          }
        );
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
      }
}