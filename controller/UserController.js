//init Route
const express=require('express')
const router =express.Router()

//service imports
const { apiUrls,
    signIn,
    signUp,
    updateUser,
    getUser,
    getUsers,
    deleteUser} =require('../Service/UserService')

router.get(`/`,apiUrls)
router.post(`/sign-up`,signUp)
router.get(`/sign-in`,signIn)
router.get(`/users/`,getUsers)
router.get(`/users/:userId`,getUser)
router.put(`/users`,updateUser)
router.delete(`/users`,deleteUser)


module.exports = router