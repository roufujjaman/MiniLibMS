import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
	tagTypes: ["books"],
	endpoints: (builder) => ({
		getBooks: builder.query({
			query: (page) => `/books?page=${page}`,
			providesTags: ["books"],
		}),
		createBook: builder.mutation({
			query: (bookData) => ({
				url: "/books",
				method: "POST",
				body: bookData,
			}),
			invalidatesTags: ["books"],
		}),
		deleteBook: builder.mutation({
			query: (bookID) => ({
				url: `/books/${bookID}`,
				method: "DELETE",
			}),
			invalidatesTags: ["books"],
		}),
	}),
});

export const {
	useGetBooksQuery,
	useCreateBookMutation,
	useDeleteBookMutation,
} = baseApi;
