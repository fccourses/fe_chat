import { useEffect, useLayoutEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ChatActionCreators from './actions/chatActionCreators'

function App (props) {
  const { messages, isFetching, error } = useSelector(state => state.chat)
  const dispatch = useDispatch()
  const { getMessagesRequest, createMessageRequest } = bindActionCreators(
    ChatActionCreators,
    dispatch
  )

  useEffect(() => {
    getMessagesRequest()
  }, [])

  useLayoutEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })
  }, [messages])

  return (
    <div>
      <ul>
        {isFetching && <li>Messages is loading...</li>}
        {messages.map(msg => (
          <li key={msg._id}>{JSON.stringify(msg, null, 8)}</li>
        ))}
      </ul>
      <Formik
        onSubmit={(values, formikBag) => {
          createMessageRequest(values)
          formikBag.setFieldValue('text', '')
        }}
        initialValues={{
          name: '',
          text: ''
        }}
      >
        <Form>
          <Field name='name' placeholder='name' />
          <Field name='text' placeholder='text' />
          <button type='submit'>Send message</button>
        </Form>
      </Formik>
    </div>
  )
}

export default App
