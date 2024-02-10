# Appwrite with React

## Install JavaScript appwrite SDK

```bash
npm install appwrite
```

## folder structures

- create a folder `src/lib/appwrite/`.
- Inside `appwrite/` create files `config.ts` & `api.ts`.

[`config.ts`]

```ts
import { Client, Account, Databases, Storage, Avatars } from "appwrite";

// declare all the enviroment variables inside appwriteConfig object
export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
  savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
};

// create an Instance of Client
export const client = new Client();
client.setProject(appwriteConfig.projectId);
client.setEndPoint(appwriteConfig.url);

// create Instances of Account, Databasesm, Storage, Avatars for the client
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
```

## Authentication

```ts
import { ID, Query } from "appwrite";
import { account, appwriteConfig, databases, storage, avatars } from "./config";
```

### createUserAccount function

After getting the user's email and password from the form, we need to create a user account in Appwrite.

```ts
type IUser = {
  name: string;
  email: string;
  username: string;
  password: string;
};

async function createUserAccount(user: IUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(user.name);

    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      username: user.username,
      imageUrl: avatarUrl,
    });

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
}
```

### saveUserToDB function

```ts
async function saveUserToDB(user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl: URL;
  username?: string;
}) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user
    );

    return newUser;
  } catch (error) {
    console.log(error);
  }
}
```

### signInAccount function

```ts
export async function signInAccount(user: { email: string; password: string }) {
  try {
    const session = await account.createEmailSession(user.email, user.password);

    return session;
  } catch (error) {
    console.log(error);
  }
}
```

### getCurrentUser function

```ts
async function getCurrentUser() {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
}
```

### signOutAccount function

```ts
async function signOutAccount() {
  try {
    const session = await account.deleteSession("current");
    return session;
  } catch (error) {
    console.log(error);
  }
}
```
