import { Form } from '@redwoodjs/forms/dist'
import { useLayoutEffect, useState, useCallback } from 'react'
import InputField from 'src/components/InputField/InputField'
import SubmitButton from 'src/components/SubmitButton/SubmitButton'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

const HangmanPage = () => {
  const [word, setWord] = useState('')
  const [guess, setGuess] = useState('')
  const [answer, setAnswer] = useState([''])
  let errors = 0

  const getWord = useCallback(async () => {
    fetch('https://random-word-api.herokuapp.com/word?number=1')
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        setWord(response[0])
        const newAnswer = []
        for (let i = 0; i < response[0].length; i++) {
          newAnswer.push('_ ')
        }
        setAnswer(newAnswer)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useLayoutEffect(() => {
    getWord()
  }, [getWord])

  const handleChange = (e) => {
    setGuess(e.target.value)
  }

  const handleGuess = () => {
    console.log(guess)
    console.log(answer)
    if (guess.length === 1 && word.includes(guess)) {
      console.log('Yay')
      const index = word.indexOf(guess)
      console.log(index)
      answer.splice(index, 1, guess)
      answer.join()
    } else {
      console.error('No')
      errors++
      console.log(errors)
    }
  }
  const Man = () => {
    switch (errors) {
      case 0:
        return (
          <section>
            <article>&nbsp;&nbsp;+-----+</article>
            <article>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>=============</article>
          </section>
        )
      case 1:
        return (
          <section>
            <article>&nbsp;&nbsp;+-----+</article>
            <article>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>=============</article>
          </section>
        )
      case 2:
        return (
          <section>
            <article>&nbsp;&nbsp;+-----+</article>
            <article>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>=============</article>
          </section>
        )
      case 3:
        return (
          <section>
            <article>&nbsp;&nbsp;+-----+</article>
            <article>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;/|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>=============</article>
          </section>
        )
      case 4:
        return (
          <section>
            <article>&nbsp;&nbsp;+-----+</article>
            <article>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;/|\&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>=============</article>
          </section>
        )
      case 5:
        return (
          <section>
            <article>&nbsp;&nbsp;+-----+</article>
            <article>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;/|\&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>=============</article>
          </section>
        )
      case 6:
        return (
          <section>
            <article>&nbsp;&nbsp;+-----+</article>
            <article>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;/|\&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;/&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</article>
            <article>=============</article>
          </section>
        )
    }
  }

  return (
    <MainLayout>
      <section className="rounded-2xl shadow-2xl mt-12 w-1/3 mx-auto text-white p-4 bg-white bg-opacity-5">
        {word.length !== 0 ? (
          <article>
            <h2 className="text-3xl font-bold text-peach">Hangman</h2>
            <p className="text-xl">{word ? word : 'Loading'}</p>
            <p className="text-xl">
              {answer.length !== 0
                ? answer.map((ans, i) => <span key={i}>{ans}</span>)
                : 'Loading'}
            </p>
          </article>
        ) : (
          <p>Loading</p>
        )}
        {guess}
        <p className="text-orange">Errors: {errors}</p>
        <section className="gallows">
          <Man />
        </section>
      </section>
      <section className="rounded-2xl shadow-2xl mt-12 w-1/3 mx-auto text-white p-4 bg-white bg-opacity-5">
        <Form onSubmit={handleGuess}>
          <InputField
            name="guess"
            onChange={(e) => {
              handleChange(e)
            }}
          />
          <SubmitButton text="Guess" disabled={errors >= 6} />
        </Form>
      </section>
    </MainLayout>
  )
}

export default HangmanPage
