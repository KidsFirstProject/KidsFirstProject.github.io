import React from 'react';

const Blog20160819 = {
  id: 20160819,
  title: 'Understanding the Relationship between Poverty and Childhood Development: Learning Curve Model',
  type: 'text',
  publishDate: '2016-08-19',
  summary: 'In an era where human intelligence is increasing exponentially, the explosion of global poverty has created an educational gap within the human race. Today, Oregon is spending billions of dollars on public education, from purchasing countless, pricey textbooks to investing in high tech devices, yet we are ranked 48th in the nation in terms of high school graduation rates and 46th for early childhood education. Taking into account the many external factors placed upon youth, my experiences led me to the question: how does poverty play a role in a child’s development and education? Observing a generational cycle of poverty, I decided to look into the effects of poverty on child development.',
  body: [
    {
      type: 'heading',
      text: 'Introduction'
    },
    {
      type: 'paragraph',
      text: 'In an era where human intelligence is increasing exponentially, the explosion of global poverty has created an educational gap within the human race. Today, Oregon is spending billions of dollars on public education, from purchasing countless, pricey textbooks to investing in high tech devices, yet we are ranked 48th in the nation in terms of high school graduation rates and 46th for early childhood education. While some may point fingers at our education system or allocation of funds, we must take a look at our country’s ever increasing number of people living in poverty. After years of directly working with children experiencing homelessness, I found unreached potential due to a lack of resources. I observed that no matter what age children were, their parents were unable to give them attention due to the stressful situations caused by homelessness in my community. Toddlers could not be read to every night, grade school children couldn’t afford to participate in afterschool programs, and teenagers were not held accountable each night for completing their homework. Taking into account the many external factors placed upon these youth, my experiences led me to the question: how does poverty play a role in a child’s development and education?'
    },
    {
      type: 'paragraph',
      text: 'Observing a generational cycle of poverty, I decided to look into the effects of poverty on child development. According to an article published by US News, “Poverty also appears to be associated with smaller brain volumes in areas involved in emotion processing and memory.” From the time a child is born to the time their brain is fully developed in their twenties, an individual’s development is widely determined by their environment - They face staggered development compared to their more privileged counterparts, ultimately placing children experiencing poverty at a far greater disadvantage in terms of academic opportunity.'
    },
    {
      type: 'paragraph',
      text: 'After brainstorming ways I could carry out my own research to prove the negative effects poverty has on childhood development, I came across the mathematical learning curve model.'
    },
    {
      type: 'heading',
      text: 'The Learning Curve'
    },
    {
      type: 'paragraph',
      text: 'A popular model used in economics to hypothesize the cost of production with efficiency, the learning curve is a graphical representation of the increase of learning with experience. The unit learning curve was developed by James R. Crawford in 1947 to study airframe production and is represented by the unit curve equation. It focuses on the hours or costs involved in specific units of production and treats each trial, or set, as a separate reference point. The theory states that people can learn to do things more efficiently when performing repetitive tasks. The more subsequent iterations there are, the more efficient the person becomes at completing said task. To my knowledge, the learning curve model has never been used to determine the effects poverty has on child development, so I wanted to be able to apply the economic model to a new perspective.'
    },
    {
      type: 'paragraph',
      text: 'The aim of my exploration is to compare the learning curves and average number of words memorized between first graders going to both a high and low income elementary school. The efficacy of memorization as a means of measuring one’s knowledge is seen in the fact that a child’s memory is one of the most crucial parts of their development, as it is the brain’s filing system of information, much like how a library contains knowledge through books7. Because memory is said to be negatively affected by poverty, I predict that children living in poverty will have a decreased productivity and memorization performance compared to upper middle class children, proving through mathematical and statistical evidence that poverty negatively affects childhood development.'
    },
    {
      type: 'heading',
      text: 'Data'
    },
    {
      type: 'paragraph',
      text: 'In order to obtain first hand data, I got in touch with Forest Park Elementary and Whitman Elementary through my former second grade teacher. On opposite sides of town, Forest Park and Whitman students have contrasting socioeconomic situations, creating a large disparity in terms of outside resources, support, and educational environments.'
    },
    {
      type: 'table',
      title: 'Brief Demographics of Forest Park and Whitman Elementary School',
      column_headers: [
        'Forest Park',
        'Whitman'
      ],
      data: [
        ['Very small number of students receive free or reduced lunch', '100% of students receive free or reduced lunch'],
        ['Economically disadvantaged: 1.6%', 'Economically disadvantaged: 57.9%'],
        [<React.Fragment>
          <p>5th Grade (2011-2012) % Meeting or Achieving Benchmarks</p>
          <ul>
            <li>94.6% Math</li>
            <li>94.6% Reading</li>
          </ul>
        </React.Fragment>,
        <React.Fragment>
          <p>5th Grade (2011-2012) % Meeting or Achieving Benchmarks</p>
          <ul>
            <li>39.7% Math</li>
            <li>49.2% Reading</li>
          </ul>
        </React.Fragment>],
        [<React.Fragment>
          <p>3rd Grade (2011-2012) % Meeting or Achieving Benchmarks</p>
          <ul>
            <li>84.9% Math</li>
            <li>92.5% Reading</li>
          </ul>
        </React.Fragment>,
        <React.Fragment>
          <p>3rd Grade (2011-2012) % Meeting or Achieving Benchmarks</p>
          <ul>
            <li>52.6% Math</li>
            <li>70.2% Reading</li>
          </ul>
        </React.Fragment>],
        ['Talented and Gifted: 17.3%', 'Talented and Gifted: 2.5%']
      ]
    },
    {
      type: 'paragraph',
      text: 'Conducted during one class period, the teacher of the first grade class and I propped up folders between each student to ensure nobody looked over at each other’s papers. I then projected twenty basic, preschool-level words onto the class screen for thirty seconds, allowing each student to memorize as many words as they could in the given time frame. Taking away the list of words, the children then had to write down as many words as they could remember on a blank sheet of paper. Afterwards, the paper was taken away, labeled with the participant’s name and trial number (1), and given a new piece of paper. The memory game was tested for a total of three times under the exact same conditions with a couple minutes in-between trials.'
    },
    {
      type: 'heading',
      text: 'Calculations (Omitted for web publishing)'
    },
    {
      type: 'paragraph',
      text: 'In order to process the data, I used the unit learning curve equation by calculating trials independent of each other with cumulative and individual averages of words memorized.'
    },
    {
      type: 'paragraph',
      text: 'By not showing the details of calculations, here I write down the results for drawing the conclusions.'
    },
    {
      type: 'paragraph',
      text: 'Both Forest Park and Whitman students were able to memorize more words as more trials were performed, yet the average number of words memorized by Forest Park students was consistently higher than the average number of words memorized by Whitman students.'
    },
    {
      type: 'paragraph',
      text: 'Difference between Forest Park and Whitman learning rates: 1.450-1.445 = .005 (insignificant)'
    },
    {
      type: 'heading',
      text: 'Conclusion'
    },
    {
      type: 'paragraph',
      text: 'The result that shows the average of learning rates for both schools are almost exactly the same really surprises me. While it doesn’t necessarily invalidate the arguments as discussed in the beginning of this paper, it offers some evidence that the ability to learn, at least among the children at this stage of their development, no matter what their economic standpoint is, is the same. In high school, a child’s socioeconomic status may have a more pronounced effect on their development, as their brain is nearly fully developed by then, therefore affecting their overall ability to learn. To me this finding is very significant as children with an economic disadvantage are entitled to the same dream as everyone else as they have the ability to become a scientist, a social justice advocate, a teacher, or even a future President. Unfortunately, because of the implications of poverty, those children do not have access to many of the social resources that the rest of society does. Their learning capacity is unmitigatedly suppressed. This is reflected in the memory capacity data that showed that Forest Park students were able to memorize more words on average compared to Whitman students, despite having the same learning rate. For accumulated number of words for all participants, Forest Park students memorized 38% more than Whitman students.'
    },
    {
      type: 'paragraph',
      text: 'The above discussion is crucial to the educational sector in the following three aspects. One is that decision makers should respect that all children have an equal capacity, as seen through the near equal average learning rates between Forest Park and Whitman students, and right to learn. Treating children living in poverty as if they have a ‘learning’ disability is not a constructive method and excuse for not allocating insufficient resources. Second, the theory cited in the US News article could still hold true if the children under poverty continue to suffer from inadequate learning environment and result in brains not being fully developed when they grow into their adolescent years. Lastly, politicians are shortsighted to ignore such a problem that is affecting so many young people. The impact of ignorance towards educational disparities will in turn translate into a disproportionate waste of social resources, where money is being allocated towards ineffective solutions meant to break the generational cycle of poverty.'
    },
    {
      type: 'paragraph',
      text: 'Although the results provide more insights to childhood development, especially those in poverty, there were potential errors and setbacks involved that may have skewed the data. Because I wanted to take each individual into account, I did not take outliers into consideration, which are the number of words memorized within a trial that exceed the class average plus or minus the standard deviation, where one student may have had an extremely high score that would bring the cumulative average higher, or another student may have had an extremely low score, bringing the cumulative average down. Despite our best efforts to prevent cheating, there may have been cheating in some form when the trials were being conducted. Finally I had not considered that some children could have memorized many words at first, but then memorized fewer later on. Little errors like these can create a skew that can potentially adjust the outcome to be very different from reality. Fortunately the standard deviation of the data was relatively low, between 1.90 and 3.12, so even if there were a couple of outliers their impact was not very large on the overall picture.'
    },
    {
      type: 'paragraph',
      text: 'If I were to expand on this experiment, I would try the same exercise on different age ranges. Since the human brain continue to develop well into a person’s 20’s, it’s possible that the learning rate itself might change as children grow up, and that the lack of resources results in a serious negative effect on the ability of a child to learn in the future. Outside of having a lack of educational resources, poverty may also negatively affect a child’s academics through other factors, like a lack of nutrition, time, and external stress, further staggering development and preventing them from being able to succeed in school.'
    },
    {
      type: 'paragraph',
      text: 'In conclusion, I think it is safe to say for now that based on the data acquired, poverty negatively affects child development. Schools and communities can help alleviate this disparity and end the generational cycle of poverty by providing additional resources and programs for youth inside and outside of school. Emphasizing the importance of both educational and recreational activities, these affordable and convenient programs for children to participate in after school would assist in their development and mental health. Skills such as reading and critical thinking are crucial in the development of youth starting from a very young age. By continuing to emphasize the importance of classroom curriculum and core subjects but adding in additional educational and recreational resources, we should see improvements in children’s memory and cognitive abilities.'
    },
    {
      type: 'paragraph',
      text: 'That is exactly the reason I found Kids First Project, a nonprofit organization that has a mission to promote HOPE - Health, Opportunity, Play, Education. We hope to provide youth experiencing homelessness with the attention they need by raising awareness on the lack of funding going towards disadvantaged children, providing the resources necessary for children experiencing homelessness to reach their full potential, freeing up time for parents to get training on job skills and ultimately breaking the generational cycle of poverty.'
    },
    {
      type: 'divider'
    },
    {
      type: 'paragraph',
      text: 'Alisha Zhao'
    },
    {
      type: 'small',
      text: 'Executive Director of Kids First Project'
    }
    
  ]
}

export default Blog20160819;