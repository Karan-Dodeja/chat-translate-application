import { db } from "@/firebase";

import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  collection,
  collectionGroup,
  doc,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { User } from "next-auth";

const userConvertor: FirestoreDataConverter<User> = {
  toFirestore: function (customer: User): DocumentData {
    return {
      email: customer.email,
      name: customer.name,
      image: customer.image,
    };
  },
  fromFirestore: function (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): User {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      email: data.email,
      image: data.image,
      name: data.name,
    };
  },
};

export const getUserByEmailRef = (email: string) =>
  query(collection(db, "users"), where("email", "==", email)).withConverter(
    userConvertor
  );
