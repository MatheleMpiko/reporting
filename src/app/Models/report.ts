export default interface Report {
    id ?: string;
    location : string;
    description : string;
    fileUrl : string;
    fileType : string;
    approve?: boolean;
  }