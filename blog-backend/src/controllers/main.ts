import { RequestHandler } from "express";

export const getAllPosts: RequestHandler = async (req, res) => {
  res.json({
    posts: []
  })
}

export const getPosts: RequestHandler = async (req, res) => {

}

export const getRelatedPosts: RequestHandler = async (req, res) => {

}