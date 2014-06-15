class ProgramAnswer < ActiveRecord::Base
  belongs_to :program
  belongs_to :answer
end
