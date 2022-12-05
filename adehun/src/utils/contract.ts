const ContractStatus = (status: number): string => {
  switch (status) {
    case 0:
      return "DRAFT";
    case 1:
      return "PENDING";
    case 2:
      return "PAID";
    case 3:
      return "DISPUTE";
    case 4:
      return "COMPLETED";
    case 5:
      return "CANCELLED";
    default:
      return "INVALID";
  }
};

export default ContractStatus;
