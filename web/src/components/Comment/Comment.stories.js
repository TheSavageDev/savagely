import Comment from './Comment'

export const defaultView = () => {
  return (
    <div className="m-4">
      <Comment
        comment={{
          name: 'Jason Savage',
          body: 'First!',
          createdAt: '2021-03-17T12:33:32Z',
        }}
      />
    </div>
  )
}

export const moderatorView = () => {
  mockCurrentUser({
    roles: ['admin'],
  })

  return (
    <div className="m-4">
      <Comment
        comment={{
          name: 'Jason',
          body: 'This is a test',
          createdAt: '2021-03-17T12:12:12Z',
        }}
      />
    </div>
  )
}

export default { title: 'Components/Comment' }
