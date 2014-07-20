class Program < ActiveRecord::Base
  has_many :program_answers
  has_many :program_questions
  has_many :answers, :through => :program_answers
  has_many :questions, :through => :program_questions
end
