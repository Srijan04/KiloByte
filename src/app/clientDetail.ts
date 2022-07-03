interface Member{
    name: string
}

interface Folder{
    preview: any
}

export interface Details{
    clientID: string
    companyName: string
    createdAt: Date
    _id: any
    assignedMembers: Member[]
    folder: Folder[]
    type: string
    docType: string
}