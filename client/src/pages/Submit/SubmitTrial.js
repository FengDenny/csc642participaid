import React, { useState } from "react";
import { Container, Card, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function SubmitTrial({
  title,
  setTitle,
  participants,
  setParticipants,
  handleFormSubmit,
  payout,
  setPayout,
  description,
  setDescription,
  qualified,
  notQualified,
  setQualified,
  setNotQualified,
  prerequisite,
  setPrerequisite,
  location,
  setLocation,
  status,
  setStatus,
  start,
  setStart,
  end,
  setEnd,
  SignInModal,
  ParticipantAuthModal,
  ClinicalAuthModal,
  showModal,
  setShowModal,
  showClincicalModal,
  setShowClincicalModal,
  showSignInModal,
  setShowSignInModal,
  active,
  setActive,
  clinicalLoggedIn,
  priceError,
  startError,
  endError,
  locationError,
  studyType,
  setStudyType,
  commaError,
  commaTwoError,
  aptno,
  setAptno,
  citystate,
  setCityState,
  zipcode,
  setZipcode,
}) {
  const { auth } = useSelector((state) => ({ ...state }));
  return (
    <>
      <Container>
        <section className='margin-top-10 margin-right-sm'>
          <h1 className='font-size-md primary-color text-center  '>
            Schedule A Medical Trial
          </h1>
          <Card className='margin-auto width-450 height-auto '>
            <p className='font-size-xsm margin-left-70 top-10 red-color'>
              All fields with * are required.
            </p>
            <Container fluid className='top-5'>
              <Form className='margin-top-sm font-size-xsm'>
                <Form.Group className='mb-3 form-group-control '>
                  <Form.Label>
                    Trial Title <span className='red-color'>*</span>
                  </Form.Label>
                  <Form.Control
                    as='textarea'
                    placeholder='Long-term Safety and Efficacy Study for  Individuals Who Are Long Term Smokers '
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength='100'
                  />
                </Form.Group>
                <Form.Group className='mb-3 form-group-control'>
                  <Form.Label>
                    Participants <span className='red-color'>*</span>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Smokers'
                    rows={4}
                    value={participants}
                    onChange={(e) => setParticipants(e.target.value)}
                    maxLength='100'
                  />
                </Form.Group>

                <Form.Group className='mb-3 form-group-control'>
                  <Form.Label>
                    Description <span className='red-color'>*</span>
                  </Form.Label>
                  <Form.Control
                    as='textarea'
                    placeholder='Trial Description'
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    maxLength='300'
                  />
                </Form.Group>
                <Form.Group className='mb-3 form-group-control'>
                  <Form.Label>
                    Who may participate <span className='red-color'>*</span>
                  </Form.Label>
                  <Form.Control
                    as='textarea'
                    id='isQualified'
                    placeholder='Smoker, 18+ years, Gender Neutral'
                    rows={4}
                    value={qualified}
                    onChange={(e) => setQualified(e.target.value)}
                    maxLength='100'
                  />
                  {commaError && (
                    <Form.Label className='red-color top5 font-size-14'>
                      {commaError}
                    </Form.Label>
                  )}
                </Form.Group>
                <Form.Group className='mb-3 form-group-control'>
                  <Form.Label>
                    Who may not participate <span className='red-color'>*</span>
                  </Form.Label>
                  <Form.Control
                    as='textarea'
                    id='notQualified'
                    placeholder='Non-smokers, 17 years and under'
                    rows={4}
                    value={notQualified}
                    onChange={(e) => setNotQualified(e.target.value)}
                    maxLength='100'
                  />
                  {commaTwoError && (
                    <Form.Label className='red-color top5 font-size-14'>
                      {commaTwoError}
                    </Form.Label>
                  )}
                </Form.Group>
                <Form.Group className='mb-3 form-group-control'>
                  <Form.Label>
                    Any Prerequisite? <span className='red-color'>*</span>
                  </Form.Label>
                  <Form.Control
                    as='textarea'
                    placeholder='Negative allergic test results'
                    value={prerequisite}
                    onChange={(e) => setPrerequisite(e.target.value)}
                    maxLength='100'
                  />
                </Form.Group>
              </Form>
            </Container>
          </Card>

          <Card className='margin-auto width-450 height-auto top-10 padding-10'>
            <Container fluid className='margin-top-sm'>
              <Form.Label className='form-group-control font-size-sm primary-color'>
                Trial's Location
              </Form.Label>
              <Row className='row-width-margin'>
                <Form.Group as={Col} id='userAddress'>
                  <Form.Label>
                    Street Address <span className='red-color'>*</span>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder={auth.address}
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} id='userAptno'>
                  <Form.Label>Apt, Suite, Bldg</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder={auth.aptno}
                    value={aptno}
                    onChange={(e) => {
                      setAptno(e.target.value);
                    }}
                    required
                  />
                </Form.Group>
              </Row>
              <Row className='row-width-margin'>
                <Form.Group as={Col} id='userCityState'>
                  <Form.Label>
                    City, State <span className='red-color'>*</span>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder={auth.citystate}
                    value={citystate}
                    onChange={(e) => {
                      setCityState(e.target.value);
                    }}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} id='userZipcode'>
                  <Form.Label>
                    Zipcode <span className='red-color'>*</span>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder={auth.zipcode}
                    value={zipcode}
                    onChange={(e) => {
                      setZipcode(e.target.value);
                    }}
                    required
                  />
                </Form.Group>
              </Row>
            </Container>
          </Card>

          <Card className='margin-auto width-450 height-auto top-20'>
            <Container fluid className=''>
              <Form className='margin-top-sm font-size-xsm'>
                <Form.Group className='mb-3 form-group-control'>
                  <Form.Label>
                    Payout <span className='red-color'>*</span>
                  </Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='50'
                    min='0'
                    value={payout}
                    onChange={(e) => setPayout(e.target.value)}
                  />
                  {priceError && (
                    <Form.Label className='red-color top5 font-size-14'>
                      {priceError}
                    </Form.Label>
                  )}
                </Form.Group>

                <Form.Group className='mb-3 form-group-control'>
                  <Form.Label>
                    Trial Status <span className='red-color'>*</span>
                  </Form.Label>
                  <Form.Select
                    aria-label='Default select example'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option>Select status</option>
                    <option value='Recruiting'>Recruiting</option>
                    <option value='Not Recruiting'>Not Recruiting</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3 form-group-control'>
                  <Form.Label>
                    Study Type <span className='red-color'>*</span>
                  </Form.Label>
                  <Form.Select
                    aria-label='Default select example'
                    value={studyType}
                    onChange={(e) => setStudyType(e.target.value)}
                  >
                    <option>Select type</option>{" "}
                    <option value='Interventional'>Interventional</option>
                    <option value='Observational'>Observational</option>
                  </Form.Select>
                </Form.Group>
                <Row className='form-row'>
                  <Form.Group className='mb-3'>
                    <Form.Label>
                      Start Date <span className='red-color'>*</span>
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='11/20/2021'
                      className='form-control-width'
                      value={start}
                      onChange={(e) => setStart(e.target.value)}
                      maxLength='10'
                    />
                    {startError && (
                      <Form.Label className='red-color top5 font-size-14'>
                        {startError}
                      </Form.Label>
                    )}
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Label>
                      End Date <span className='red-color'>*</span>
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='03/20/2022'
                      className='form-control-width'
                      value={end}
                      onChange={(e) => setEnd(e.target.value)}
                      maxLength='10'
                    />
                    {endError && (
                      <Form.Label className='red-color top5 font-size-14'>
                        {endError}
                      </Form.Label>
                    )}
                  </Form.Group>
                </Row>
              </Form>
            </Container>
          </Card>
          <Card className='margin-auto width-450 height-auto margin-top-sm top-20 padding-10'>
            <Container fluid className='margin-top-sm'>
              <Form.Group className='width-200 left-20'>
                <p className=''>
                  <span>*</span> All trials must be reviewed and accepted before
                  scheduling.
                </p>
                <p>
                  <span>*</span> By submitting for review, I have agreed to{" "}
                  <Link to='#' className='primary-color'>
                    Terms and conditions
                  </Link>
                  .
                </p>
              </Form.Group>
              <Form.Group className='left-20 '>
                <Button
                  disabled={
                    priceError ||
                    !qualified ||
                    !notQualified ||
                    !studyType ||
                    !title ||
                    !participants ||
                    !citystate ||
                    !zipcode ||
                    !payout ||
                    !prerequisite ||
                    !location ||
                    !status ||
                    !start ||
                    !end
                  }
                  variant='primary'
                  className='card-primary-color-btn width-308 bottom-3'
                  onClick={(e) => {
                    clinicalLoggedIn
                      ? handleFormSubmit(e)
                      : setActive("clinical") || setShowClincicalModal(true);
                  }}
                >
                  Submit For Review
                </Button>
              </Form.Group>
            </Container>
          </Card>
        </section>
      </Container>
      {active === "signin" && (
        <SignInModal
          show={showSignInModal}
          onHide={() => setShowSignInModal(false)}
          setShowModal={setShowModal}
          setActive={setActive}
        />
      )}{" "}
      {active === "clinical" && (
        <ClinicalAuthModal
          show={showClincicalModal}
          onHide={() => setShowClincicalModal(false)}
          setShowModal={setShowModal}
          setShowSignInModal={setShowSignInModal}
          setActive={setActive}
          setShowClincicalModal={setShowClincicalModal}
        />
      )}
      {active === "participant" && (
        <ParticipantAuthModal
          show={showModal}
          onHide={() => setShowModal(false)}
          setActive={setActive}
          setShowClincicalModal={setShowClincicalModal}
          setShowSignInModal={setShowSignInModal}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}
